"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export function ForgetPassword({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push("/auth/login")}
                            className="p-1 h-8 w-8 ring-1"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <CardTitle>Enter your email</CardTitle>
                    </div>
                    <CardDescription>
                        Enter the email you used to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>

                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>

                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
