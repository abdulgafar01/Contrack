import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Page = () => {
    const contributions = [
        { repo: "next.js", date: "2023-10-01", type: "Pull Request" },
        { repo: "tailwindcss", date: "2023-10-02", type: "Issue" },
        { repo: "shadcn/ui", date: "2023-10-03", type: "Commit" },
      ];



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card>
      <CardHeader>
        <CardTitle>Recent Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Repository</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contributions.map((contribution, index) => (
              <TableRow key={index}>
                <TableCell>{contribution.repo}</TableCell>
                <TableCell>{contribution.date}</TableCell>
                <TableCell>{contribution.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    </div>
  )
}

export default Page
