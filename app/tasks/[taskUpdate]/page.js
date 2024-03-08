import EditForm from "@/app/components/EditForm"
import { getTask } from "@/utils/action";
import Link from "next/link";

const page = async({params}) => {
    const content = await getTask(params['taskUpdate']);
    const title = content.content;
  return (
    <div>
        <button className="text-white btn btn-accent">
            <Link href="/tasks">BACK TO TASKS</Link>
        </button>
        <EditForm id={params['taskUpdate']} content={title}/>
    </div>
  )
}

export default page