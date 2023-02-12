import { SkillGroup } from "@/typings";

export const fetchSkillGroups = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillGroups`);

    const data = await res.json();
    const skillGroups: SkillGroup = data.skillGroups;

    return skillGroups;
}