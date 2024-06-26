import {LoginForm} from "@/app/login/_components/login-form";
import Link from "next/link";
import {Suspense} from "react";
import type {Metadata} from "next";
import {PageBox} from "@/app/_components/page-box";

export const metadata: Metadata = {
    title: "Login",
};

export default function Login() {
    return <PageBox className={"w-full h-screen items-center justify-center"}>
        <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <Suspense>
                    <LoginForm/>
                </Suspense>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    </PageBox>
}