import React from "react";
import Link from "next/link";
import Container from "../../components/CenteredContainer";
import "twin.macro";

function Cancel() {
  return (
    <Container>
      <div className="p-16">
        <h1>You have successfully confirmed your membership</h1>

        <Link href="/pricing">
          <a href="/pricing" tw="text-indigo-600">
            Go back
          </a>
        </Link>
      </div>
    </Container>
  );
}

export default Cancel;
