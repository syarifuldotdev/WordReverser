import Form from "@/components/Form";

export default function Home() {

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div>
            <div className="max-w-md">
              <h1 className="md:text-5xl text-4xl font-bold">Password Reverser</h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}