import axios from "axios";
import prisma from '@/db';
// const prisma = new PrismaClient()

async function fetchData() {
    const user = await prisma.user.findFirst({});
    return ({
        name: user?.username,
        email: user?.username
    })
}

export default async function Home() {
  const userData = await fetchData();

  return <div className='flex flex-col justify-center h-screen'>
    <div className='flex justify-center'>
      <div className='border p-8 rounded'>
        <div>
          Name: {userData?.name}
        </div>
        {userData?.email}
      </div>
    </div>
  </div>
}
