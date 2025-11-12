import { redirect } from "next/navigation";

import { stripe } from "../../lib/stripe";

export const runtime = "edge";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section className="p-5" id="success">
        <p className="text-green-400">
          I appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
        </p>
        <a className="text-green-400" href="mailto:hamed@postcardpolska.pl">
          hamed@postcardpolska.pl
        </a>
        .
      </section>
    );
  }
}
