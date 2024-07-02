"use client"

import {Box} from "@/app/_components/box";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {newLocationFormSchema} from "@/app/_components/location/new-location-form-schema";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Pen} from "lucide-react";

export function NewLocationForm() {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isEditingStreet, setIsEditingStreet] = useState<boolean>(false)

    const form = useForm<z.infer<typeof newLocationFormSchema>>({
        resolver: zodResolver(newLocationFormSchema),
        defaultValues: {
            city: "Macapa",
            state: "AP",
            neighborhood: "Beirol",
            street: "Av. Jose Trajano de Sousa",
            addressWithoutComplement: false,
            addressWithoutNumber: false
        }
    })

    async function onSubmit(values: z.infer<typeof newLocationFormSchema>) {
        setIsLoading(true)
        console.log(values)
        const res = {
            error: "Error creating location"
        }
        if (res.error) {
            toast(res.error)
            setIsLoading(false)
        } else {
            toast("Location created successfully")
            return router.push('/')
        }
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
              className="w-full mx-auto font-normal p-[10px] flex flex-col gap-[15px]">
            <Box className={"bg-orange-400 w-full h-[200px] flex items-center justify-center"}>
                <span>map here</span>
            </Box>

            <Box className={"flex items-center justify-between w-full"}>
                <Box className={"flex flex-col gap-1"}>
                    <span className={"font-semibold text-lg"}>{form.formState.defaultValues?.street}</span>
                    <span>{form.formState.defaultValues?.neighborhood}, {form.formState.defaultValues?.city} - {form.formState.defaultValues?.state}</span>
                </Box>

                {!isEditingStreet && <Button size={"icon"} type={"button"} variant={"link"} onClick={() => {
                    setIsEditingStreet(!isEditingStreet)
                }}>
                    <Pen size={20}/>
                </Button>}
            </Box>

            {isEditingStreet && <>
                <FormField
                    control={form.control}
                    name={"street"}
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field}
                                       placeholder={"Street"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"neighborhood"}
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field}
                                       placeholder={"Neighborhood"}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </>}

            <FormField
                control={form.control}
                name={"number"}
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input {...field}
                                   disabled={form.watch("addressWithoutNumber")}
                                   placeholder={"Number"}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name={"addressWithoutNumber"}
                render={({field}) => (
                    <FormItem>
                        <Box className={"flex items-center gap-[8px]"}>
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                            </FormControl>
                            <FormLabel>Address without number</FormLabel>
                        </Box>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name={"complement"}
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input {...field}
                                   disabled={form.watch("addressWithoutComplement")}
                                   placeholder={"Complement"} required={false}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name={"addressWithoutComplement"}
                render={({field}) => (
                    <FormItem>
                        <Box className={"flex items-center gap-[8px]"}>
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                            </FormControl>
                            <FormLabel>Address without complement</FormLabel>
                        </Box>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name={"reference"}
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input {...field} placeholder={"Reference point (optional)"} required={false}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <Button type="submit" className={"w-full"} disabled={isLoading}>Save delivery address</Button>
        </form>
    </Form>
}