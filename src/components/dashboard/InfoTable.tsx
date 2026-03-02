import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoreHorizontalIcon } from "lucide-react"

type Product = {
    productName: string,
    prices: number
}

const data = [
    {
        productName: "Wireless Mouse",
        prices: "29.99"
    },
    {
        productName: "Computer",
        prices: "500.99"
    },
    {
        productName: "Wireless Mouse",
        prices: "29.99"
    },
    {
        productName: "Wireless Mouse",
        prices: "29.99"
    },
]

export function InfoTable({data: tableData = data}) {
    return (
        <Table className="bg-white shadow-lg rounded-md p-4">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-gray-600">Product</TableHead>
                    <TableHead className="text-gray-600">Price</TableHead>
                    <TableHead className="text-right text-gray-600">Actions</TableHead>
                </TableRow>
            </TableHeader>

            {/* Only one TableBody */}
            <TableBody>
                {tableData.map((d, index) => (
                    <TableRow key={index} className="w-full hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-500">
                            {d.productName}
                        </TableCell>
                        <TableCell className="text-gray-500">
                            ${d.prices}
                        </TableCell>
                        <TableCell className="text-right text-gray-500">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="size-8">
                                        <MoreHorizontalIcon />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem variant="destructive">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
