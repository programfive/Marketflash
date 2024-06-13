import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import './style.css'
export default function Page() {
  return (
    <section className="signIn mb-5">
      <div class=" res-hide">
        <div class="container-fluid">
          <ul class="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link href="/">Home</Link>{" "}
            </li>
            <li>SignUp</li>
          </ul>
        </div>
      </div>
      <div className='loginWrapper'>
          <div className='card shadow'>
          <SignUp />
          </div>
      </div>
    </section>
  );
}
