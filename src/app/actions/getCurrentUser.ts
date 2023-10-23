import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const currenUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currenUser) {
      return null;
    }

    return currenUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
