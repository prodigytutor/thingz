import NewThing from "./NewThing";


const Dashboard = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
         <NewThing />
        </div>
      </div>
    </section>
  );
};

export default Dashboard
