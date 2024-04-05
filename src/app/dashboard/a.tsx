"use client"

import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Dashboard() {
  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">PCI Continuous Monitoring</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Mitigated Vulnerabilities by Severity</h2>
          <StackedbarChart className="w-full h-[200px]" />
          <p className="text-sm text-gray-500 mt-2">Last Updated: 23 hours ago</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Vulnerability and Compliance Trends</h2>
          <LineChart className="w-full h-[200px]" />
          <p className="text-sm text-gray-500 mt-2">Last Updated: 1 hour ago</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">CSF - Compliance Checks By Keyword</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Systems</TableHead>
                <TableHead>Scans (Last 7 Days)</TableHead>
                <TableHead>Passed</TableHead>
                <TableHead>Manual</TableHead>
                <TableHead>Failed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Account</TableCell>
                <TableCell>765</TableCell>
                <TableCell>77%</TableCell>
                <TableCell>4%</TableCell>
                <TableCell>19%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 22 hours ago</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Most Vulnerable Hosts</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>IP Address</TableHead>
                <TableHead>DNS</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Vulnerabilities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>4940</TableCell>
                <TableCell>371</TableCell>
                <TableCell>41</TableCell>
                <TableCell>41</TableCell>
                <TableCell>41</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 4 hours ago</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Vulnerability Summary</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Total</TableHead>
                <TableHead>Mitigated</TableHead>
                <TableHead>Unmitigated</TableHead>
                <TableHead>Medium</TableHead>
                <TableHead>High</TableHead>
                <TableHead>Critical</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>54200</TableCell>
                <TableCell>301610</TableCell>
                <TableCell>99%</TableCell>
                <TableCell>29%</TableCell>
                <TableCell>39%</TableCell>
                <TableCell>39%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 23 hours ago</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Top Failures and Manual Checks</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>VMware vCenter/vSphere Compliance Checks Initialization Failed</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>354</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 2 hours ago</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Most Mitigated Vulnerabilities</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plugin ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#####</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>High</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 1 hour ago</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">PCI Monitoring - Configuration Summary</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Check Count</TableHead>
                <TableHead>Passed</TableHead>
                <TableHead>Manual Check</TableHead>
                <TableHead>Failed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>107375</TableCell>
                <TableCell>10165</TableCell>
                <TableCell>43900</TableCell>
                <TableCell>27%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 1 hour ago</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2">Understanding Risk - Remediation Opportunities</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Solution</TableHead>
                <TableHead>Risk Reduction</TableHead>
                <TableHead>Host Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  Apply MS16-014: Security Update for Microsoft Windows to Address Remote Code Execution (3134228)
                </TableCell>
                <TableCell>2.71%</TableCell>
                <TableCell>165</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 4 hours ago</p>
        </div>
      </div>
    </div>
  )
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function StackedbarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A stacked bar chart"
      />
    </div>
  )
}
