const Tool = async ({ params }: { params: Promise<{ tool: string }> }) => {
  const { tool } = await params;

  return <div>Current tool: {tool}</div>;
};

export default Tool;
