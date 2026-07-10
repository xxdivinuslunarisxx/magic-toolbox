import Button from "@/components/ui/Button";


export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="goldShimmer">Magic Tool Box UK</h1>
        <p>
          Handcrafted magical tools, creations and services.
        </p>

        <Button href="/shop">
          Explore the Shop
        </Button>
      </section>
    </main>
  );
}