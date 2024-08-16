import Link from "next/link";

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#032266,#a454d6,#310c72)]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <Link href="#" className="underline underline-offset-4">
            Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
};
