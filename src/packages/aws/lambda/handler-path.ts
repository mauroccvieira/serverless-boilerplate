export const handlerPath = (context: string) => {
  const cwd = context.split(process.cwd())[1];

  if (!cwd)
    throw new Error("Invalid Environmnent", {
      cause: "cwd process variable is undefined"
    });

  return `${cwd.substring(1).replace(/\\/g, "/")}`;
};
