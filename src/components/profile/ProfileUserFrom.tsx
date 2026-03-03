import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ProfileUserFrom() {
    return (
        <form className="w-full max-w-full mt-8">
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Field>
                    <FieldLabel htmlFor="form-name" className="text-gray-500">First Name</FieldLabel>
                    <Input
                        id="form-name"
                        type="text"
                        placeholder="First Name"
                        required
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-name" className="text-gray-500">Last Name</FieldLabel>
                    <Input
                        id="form-name"
                        type="text"
                        placeholder="Last Name"
                        required
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-email" className="text-gray-500">Email</FieldLabel>
                    <Input id="form-email" type="email" placeholder="john@example.com" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-phone" className="text-gray-500">Phone</FieldLabel>
                    <Input id="form-phone" type="text" placeholder="013055244..." />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-c-add" className="text-gray-500">Current Address</FieldLabel>
                    <Input id="form-c-add" type="text" placeholder="dhaka" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-address" className="text-gray-500">Address</FieldLabel>
                    <Input id="form-address" type="text" placeholder="123 Main St" />
                </Field>
            </FieldGroup>
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <Field>
                    <FieldLabel htmlFor="form-password" className="text-gray-500">Password</FieldLabel>
                    <Input id="form-password" type="text" placeholder="*********" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="form-c-pass" className="text-gray-500">Confirm Password</FieldLabel>
                    <Input id="form-c-pass" type="text" placeholder="*********" />
                </Field>
            </FieldGroup>
            <hr className="mt-7 border border-gray-200"/>
            <FieldGroup className="mt-6">
                <Field orientation="horizontal" className=" justify-end">
                    <Button type="button" variant="outline" className="bg-red-400 hover:bg-red-300 hover:text-white">
                        Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-500">Submit</Button>
                </Field>
            </FieldGroup>
        </form>
    )
}
