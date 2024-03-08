//IMPORTING THE PRISMA DATABASE
// import prisma from "@/utils/db";

// const prismaHandlers = async () => {
//   //CREATE FUNCTIONALITY IN PRISMA
//   await prisma.task.create({
//     data: {
//       content: 'wake up',
//     },
//   });

//   //READING FROM THE DATABASE
//   const allTasks = await prisma.task.findMany({
//     orderBy: {
//       createdAt: 'desc' //This is going to set the order as descending
//     } 
//   });
//   return allTasks;
// }

const Prisma = async() => {
  // const tasks = await prismaHandlers();
  return (
    <div>
      {/* {tasks.map((task)=>{
        return <h2 className="text-xl py-2" key={task['id']}>{task['content']}</h2>
      })} */}
      <h1 className="text-xl mt-8">No Tasks to show...</h1>
    </div>
  )
}

export default Prisma