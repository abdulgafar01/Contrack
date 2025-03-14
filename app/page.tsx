import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RocketIcon, CodeIcon, BarChartIcon } from "@radix-ui/react-icons"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-200">
    {/* Navbar */}
    <nav className="sticky top-0 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Contrack</div>
        <div className="flex gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="outline">Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="container mx-auto max-w-4xl text-center py-20">
      <h1 className="text-6xl  font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Track and Showcase Your Open Source Contributions
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        A powerful tool to monitor, analyze, and share your open-source activity.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
     
    </section>

    {/* Features Section */}
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <RocketIcon className="w-8 h-8 mb-4 text-blue-600" />
            <CardTitle>Real-Time Tracking</CardTitle>
            <CardDescription>
              Monitor your contributions in real-time with detailed insights.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CodeIcon className="w-8 h-8 mb-4 text-blue-600" />
            <CardTitle>GitHub Integration</CardTitle>
            <CardDescription>
              Seamlessly connect your GitHub account to track all your activity.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <BarChartIcon className="w-8 h-8 mb-4 text-blue-600" />
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>
              Visualize your contributions with beautiful charts and graphs.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
<Footer/>
  </div>
  )
}

export default Home

