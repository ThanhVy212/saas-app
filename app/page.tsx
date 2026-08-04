import React from 'react';
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import DatabaseError from "@/components/DatabaseError";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

export const dynamic = 'force-dynamic';

const Page = async () => {
    let companions = [];
    let recentSessionsCompanions = [];
    let isDbConnected = true;

    try {
        companions = await getAllCompanions({limit: 3, all: true});
        recentSessionsCompanions = await getRecentSessions(10);
    } catch (error: any) {
        if (error?.message?.includes('Dynamic server usage') || error?.digest === 'DYNAMIC_SERVER_USAGE') {
            throw error;
        }
        console.error("Failed to fetch database data on homepage:", error);
        isDbConnected = false;
    }

    if (!isDbConnected) {
        return (
            <main className="flex-grow flex items-center justify-center min-h-[70vh]">
                <DatabaseError />
            </main>
        );
    }

    return (
        <main>
            <h1 className="text-2xl">Popular companions</h1>
            <section className="home-section">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}

            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently completed sesson"
                    companions={recentSessionsCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

export default Page