import { CodeExample } from "@/typings";

export const fetchCodeExamples = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCodeExamples`);

    const data = await res.json();
    const codeExamples: CodeExample[] = data.codeExamples;

    return codeExamples;
}