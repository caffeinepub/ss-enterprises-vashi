import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Home,
  CreditCard,
  ShieldCheck,
  Building2,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Award,
} from "lucide-react";

const HomePage = () => {
  const featuredServices = [
    {
      icon: FileText,
      title: "उत्पन्न प्रमाणपत्र",
      description: "तुमच्या शैक्षणिक किंवा शासकीय गरजेसाठी जलद प्रमाणपत्र",
    },
    {
      icon: Home,
      title: "अधिवास प्रमाणपत्र",
      description: "महाराष्ट्रातील रहिवासी असल्याचा अधिकृत पुरावा मिळवा",
    },
    {
      icon: CreditCard,
      title: "पॅन कार्ड",
      description: "नवीन अर्ज, सुधारणा किंवा डुप्लिकेट - एकाच दिवसात",
    },
    {
      icon: ShieldCheck,
      title: "जातीचा दाखला",
      description: "शैक्षणिक आणि नोकरीसाठी आवश्यक जाती प्रमाणपत्र",
    },
    {
      icon: Building2,
      title: "उद्यम नोंदणी",
      description: "तुमच्या व्यवसायासाठी कायदेशीर नोंदणी आणि परवाना",
    },
    {
      icon: FileCheck,
      title: "नोटरी सेवा",
      description: "विश्वासू नोटरी सेवा आणि स्टॅम्प पेपर व्यवस्था",
    },
  ];

  const stats = [
    { icon: Users, value: "५०००+", label: "आनंदी ग्राहक" },
    { icon: Clock, value: "१०+", label: "वर्षांचा अनुभव" },
    { icon: FileCheck, value: "१५+", label: "सेवा उपलब्ध" },
    { icon: Award, value: "१००%", label: "प्रामाणिकता" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6 gap-2">
              <CheckCircle2 className="h-3 w-3" />
              वाशीतील विश्वासू सरकारी सेवा केंद्र
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl xl:text-6xl">
              आपले सरकार सेवा केंद्र
              <span className="mt-2 block text-primary">वाशी, नवी मुंबई</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground lg:text-xl">
              तुमच्या सर्व सरकारी कागदपत्रांसाठी एकच ठिकाण. जलद सेवा, प्रामाणिक मार्गदर्शन, १०+ वर्षांचा अनुभव.
            </p>
            <p className="mb-8 text-base font-medium text-secondary lg:text-lg">
              ✓ सर्व सेवा शासन नियमानुसार केल्या जातात
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/services">
                  सर्व सेवा पहा
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">आमच्याशी संपर्क साधा</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">आमच्या लोकप्रिय सेवा</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              वाशीतील हजारो ग्राहकांनी निवडलेल्या आमच्या विश्वासू सेवा
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Card
                key={index}
                className="group border-l-4 border-l-primary/50 transition-all hover:border-l-primary hover:shadow-lift"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">सर्व १५ सेवा पहा</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">आम्हाला का निवडावे?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <CardTitle>जलद सेवा</CardTitle>
                <CardDescription>
                  तुमचा वेळ मौल्यवान आहे! त्यामुळे आम्ही कमीत कमी वेळेत अचूक दस्तऐवज तयार करून देतो. आजच अर्ज करा, लवकरच मिळवा.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle>प्रामाणिक आणि सुरक्षित</CardTitle>
                <CardDescription>
                  दहा वर्षांपासून वाशीत सेवा देत आहोत. ५०००+ आनंदी ग्राहक आमच्यावर विश्वास ठेवतात. सर्व सेवा शासन नियमानुसार केल्या जातात.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle>तज्ञ मार्गदर्शन</CardTitle>
                <CardDescription>
                  कोणतेही कागदपत्र समजत नाही? काळजी नका! आमची अनुभवी टीम तुम्हाला प्रत्येक पायरीवर मदत करेल. मराठी-इंग्रजी दोन्हीत मार्गदर्शन.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">तुमच्या कागदपत्रांसाठी मदत हवी आहे?</h2>
          <p className="mb-8 text-lg opacity-90">
            आज लगेच आमच्याशी संपर्क साधा - आम्ही तुमची मदत करण्यास तयार आहोत!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">आता संपर्क करा</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:8070404099">८०७०४०४०९९ वर कॉल करा</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
