'use client"'

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

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useState } from "react";
import { GraduationCap, Users, ChevronLeft, Eye, EyeOff } from "lucide-react";


const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long.",
        })
        .max(32, {
            message: "Password must not exceed 32 characters.",
        })
    // .regex(/[A-Z]/, {
    //   message: "Password must contain at least one uppercase letter.",
    // })
    // .regex(/[a-z]/, {
    //   message: "Password must contain at least one lowercase letter.",
    // })
    // .regex(/[0-9]/, {
    //   message: "Password must contain at least one number.",
    // })
    // .regex(/[^A-Za-z0-9]/, {
    //   message: "Password must contain at least one special character.",
    // }),
});

// Type inference for the form schema
type FormValues = z.infer<typeof formSchema>;

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
        // Handle login logic here
    }
    const onError = (errors: any) => {
        console.log(errors)
        // Handle error logic here
    }


    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center space-x-2">
                                            <FormLabel>email</FormLabel>
                                            <span className="text-red-500">*</span>
                                        </div>
                                        <FormControl>
                                            <Input placeholder="your email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            {/* Your email will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <FormLabel>Password</FormLabel>
                                                <span className="text-red-500">*</span>
                                            </div>
                                            <a
                                                href="/auth/forgot-password"
                                                className="inline-block text-sm underline-offset-4 hover:underline text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="your password"
                                                    className="pr-10"
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                                                    tabIndex={-1}
                                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormDescription>
                                            {/* your password will be used to login. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col gap-3">
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Login with Google
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="/auth/register" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
