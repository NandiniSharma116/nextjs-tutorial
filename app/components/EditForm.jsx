import { updateTask } from "@/utils/action"

const EditForm = ({id, content}) => {
  return (
    <form action={updateTask} className="p-12 h-auto border-[1px] border-slate-950 rounded-xl max-w-sm mt-10">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          id="content"
          value={content}
        />
        <input type="hidden" name='id' value={id}/>
        <div className="flex flex-row space-x-44 mt-10 align-baseline items-center justify-center">
            <h1>Completed</h1>
            <input type="checkbox" className="checkbox checkbox-primary" name="completed" id="completed" />
        </div>
        <button className="text-white btn-sm btn btn-primary w-full mt-8" type="submit">EDIT TASK</button>
    </form>
  )
}

export default EditForm