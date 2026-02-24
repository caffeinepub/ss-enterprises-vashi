import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Users, Award, Clock, Heart, TrendingUp } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: "विश्वसनीयता",
      description: "प्रत्येक ग्राहकाशी प्रामाणिकपणे वागणे - हीच आमची पहिली जबाबदारी",
    },
    {
      icon: Clock,
      title: "वेळेचे मूल्य",
      description: "तुमचा वेळ मौल्यवान आहे म्हणून आम्ही जलद सेवा देण्यावर भर देतो",
    },
    {
      icon: Heart,
      title: "ग्राहक समाधान",
      description: "आमचे ग्राहक आमची सर्वात मोठी संपत्ती आहेत - तुमचे समाधान आमचे ध्येय",
    },
    {
      icon: Award,
      title: "गुणवत्ता",
      description: "उच्च दर्जाची सेवा आणि शासकीय नियमांचे काटेकोर पालन",
    },
  ];

  const achievements = [
    { value: "१०+", label: "वर्षांचा अनुभव" },
    { value: "५०००+", label: "आनंदी ग्राहक" },
    { value: "१५+", label: "सेवा उपलब्ध" },
    { value: "९९%", label: "सफलता दर" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6">
              आमच्याबद्दल
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
              S S ENTERPRISES
            </h1>
            <p className="text-xl text-muted-foreground">
              वाशीतील विश्वासू आणि अनुभवी सरकारी सेवा केंद्र
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">आमची कथा</h2>
            </div>
            <Card>
              <CardContent className="prose prose-lg max-w-none pt-6 text-muted-foreground">
                <p>
                  S S ENTERPRISES - आपले सरकार सेवा केंद्र वाशी हे नवी मुंबईतील एक विश्वासू आणि अनुभवी सरकारी सेवा केंद्र आहे. 
                  गेल्या दहा वर्षांपासून आम्ही वाशी आणि आजूबाजूच्या भागातील हजारो नागरिकांना त्यांच्या सर्व सरकारी कागदपत्रांसाठी मदत करत आहोत.
                </p>
                <p>
                  आमचे ध्येय फक्त एकच - प्रत्येक नागरिकाला सरकारी सेवा सोपी, जलद आणि प्रामाणिक पद्धतीने पुरवणे. सर्व सेवा शासन नियमानुसार केल्या जातात. 
                  आम्ही विविध प्रमाणपत्रे, परवाने, नोंदणी आणि इतर दस्तऐवज सेवा देतो. आमची १०+ वर्षांची अनुभवी टीम तुम्हाला प्रत्येक पायरीवर संपूर्ण मार्गदर्शन करते.
                </p>
                <p>
                  Shop No 238, Sector-2, Vashi येथे स्थित आमचे कार्यालय वाशी स्टेशनच्या अगदी जवळ आहे. आम्ही सोमवार ते शनिवार सकाळी ९ ते संध्याकाळी ७ वाजेपर्यंत 
                  तुमच्या सेवेत हजर आहोत. तुमच्या सर्व सरकारी कागदपत्रांसाठी आम्ही नेहमी तयार आहोत!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">आमचे ध्येय</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  प्रत्येक नागरिकाला सरकारी सेवा सोपी, जलद आणि प्रामाणिक पद्धतीने उपलब्ध करून देणे. सर्व सेवा शासन नियमानुसार केल्या जातात. 
                  आम्ही तंत्रज्ञान आणि अनुभवाचा वापर करून कागदपत्र प्रक्रिया सुलभ बनवतो आणि तुमचा मौल्यवान वेळ वाचवतो.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">आमची दृष्टी</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  नवी मुंबई आणि आसपासच्या भागात सर्वोत्कृष्ट आणि सर्वात विश्वासू सरकारी सेवा केंद्र म्हणून ओळखले जाणे. 
                  आम्ही सतत सेवेची गुणवत्ता सुधारत आहोत आणि तुमच्या सोयीसाठी नवीन सेवा जोडत आहोत.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t bg-gradient-to-br from-background to-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">आमची मूल्ये</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              या मूल्यांवर आमचा पक्का विश्वास आहे आणि आम्ही रोजच्या कामात या तत्त्वांचे पालन करतो
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-t py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground lg:text-4xl">
              आम्हाला का निवडावे?
            </h2>
            <div className="grid gap-6 text-left md:grid-cols-2">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">अनुभवी टीम</h3>
                  <p className="text-sm text-muted-foreground">
                    दहा वर्षांपेक्षा जास्त अनुभव असलेली तज्ञ व्यावसायिक टीम
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">जलद सेवा</h3>
                  <p className="text-sm text-muted-foreground">
                    कमीत कमी वेळेत अचूक दस्तऐवज तयार करून देणे - हीच आमची खासियत
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">स्वच्छ प्रक्रिया</h3>
                  <p className="text-sm text-muted-foreground">
                    शासन नियमांचे काटेकोर पालन आणि पारदर्शक कायदेशीर प्रक्रिया
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">सुलभ स्थान</h3>
                  <p className="text-sm text-muted-foreground">
                    वाशी स्टेशन जवळ सोयीस्कर ठिकाणी
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">योग्य शुल्क</h3>
                  <p className="text-sm text-muted-foreground">
                    स्पर्धात्मक आणि वाजवी दर - कोणताही लपलेला खर्च नाही
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">संपूर्ण मार्गदर्शन</h3>
                  <p className="text-sm text-muted-foreground">
                    सुरुवातीपासून शेवटपर्यंत प्रत्येक पायरीवर मदत आणि सल्ला
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
