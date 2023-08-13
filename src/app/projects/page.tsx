import { db } from "@/config";
import { getProjectPlatformList } from "@/service/firebase"; // Make sure to import this function
import { Projects } from '@/components/project';

export default async function Page() {
    const platformList = await getProjectPlatformList(db);
    console.log('[platformList]', platformList);

    return (
        <main className='flex flex-col px-4 md:px-8 gap-2 md:gap-4 items-end self-stretch'>
            <Projects platformList={platformList} />
        </main>
    );
}
