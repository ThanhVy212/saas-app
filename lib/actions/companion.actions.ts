'use server';

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const {userId: author} = await auth();
    const supabase = createSupabaseClient();

    if (!author) {
        throw new Error("Unauthorized");
    }

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();

    if(error || !data || data.length === 0) throw new Error(error?.message || "Failed to create a companion");

    return data[0];
}