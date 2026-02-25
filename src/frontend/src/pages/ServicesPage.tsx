import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesPage = () => {
  const services = [
    // प्रमाणपत्र (Certificates)
    {
      image: "/assets/uploads/income-certificate-2-1.webp",
      title: "उत्पन्न प्रमाणपत्र",
      englishTitle: "Income Certificate",
      description: "शैक्षणिक शुल्क सवलत, शिष्यवृत्ती किंवा शासकीय योजनेसाठी आवश्यक प्रमाणपत्र",
      category: "प्रमाणपत्र",
    },
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "अधिवास प्रमाणपत्र",
      englishTitle: "Domicile Certificate",
      description: "महाराष्ट्र राज्यातील मूळ रहिवासी असल्याचा अधिकृत पुरावा मिळवा",
      category: "प्रमाणपत्र",
    },
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "रहिवासी दाखला",
      englishTitle: "Residence Certificate",
      description: "सध्याच्या राहत्या पत्त्याचा अधिकृत पुरावा देणारा रहिवासी दाखला",
      category: "प्रमाणपत्र",
    },
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "जातीचा दाखला",
      englishTitle: "Caste Certificate",
      description: "शैक्षणिक प्रवेश आणि नोकरीसाठी आवश्यक SC/ST/OBC/NT जाती प्रमाणपत्र",
      category: "प्रमाणपत्र",
    },
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "नॉन-क्रीमीलेयर प्रमाणपत्र",
      englishTitle: "Non-Creamy Layer Certificate",
      description: "OBC प्रवर्गातील शैक्षणिक आणि नोकरी सवलतीसाठी NCL प्रमाणपत्र",
      category: "प्रमाणपत्र",
    },
    // ओळख पत्र (Identity Cards)
    {
      image: "/assets/uploads/pan-card-9.webp",
      title: "पॅन कार्ड",
      englishTitle: "PAN Card",
      description: "नवीन पॅन कार्ड अर्ज, नाव/पत्ता सुधारणा आणि डुप्लिकेट कार्ड - जलद सेवा",
      category: "ओळख पत्र",
    },
    {
      image: "/assets/uploads/nri-pan-card-12.webp",
      title: "NRI पॅन कार्ड",
      englishTitle: "NRI PAN Card",
      description: "परदेशात राहणाऱ्या भारतीयांसाठी NRI पॅन कार्ड मिळवा - ऑनलाइन प्रक्रिया",
      category: "ओळख पत्र",
    },
    {
      image: "/assets/uploads/voter-card-apply-online-10.jpg",
      title: "मतदार ओळखपत्र",
      englishTitle: "Voter ID Card",
      description: "नवीन मतदार कार्ड अर्ज, पत्ता बदल, नाव सुधारणा - सर्व सेवा उपलब्ध",
      category: "ओळख पत्र",
    },
    {
      image: "/assets/uploads/aadhaar-address-update-online-7.jpg",
      title: "आधार पत्ता अपडेट",
      englishTitle: "Aadhaar Address Update",
      description: "आधार कार्डवरील पत्ता ऑनलाइन अपडेट करा - जलद आणि सुरक्षित प्रक्रिया",
      category: "ओळख पत्र",
    },
    {
      image: "/assets/uploads/aadhar-pan-card-link-online-2.jpg",
      title: "आधार-पॅन जोडणी",
      englishTitle: "Aadhaar-PAN Linking",
      description: "आधार आणि पॅन कार्ड ऑनलाइन जोडा - आयकर विभाग अनिवार्य सेवा",
      category: "ओळख पत्र",
    },
    {
      image: "/assets/uploads/senior-citizen-17.webp",
      title: "ज्येष्ठ नागरिक ओळखपत्र",
      englishTitle: "Senior Citizen ID Card",
      description: "६० वर्षांवरील ज्येष्ठ नागरिकांसाठी ओळखपत्र - विविध सवलतींसाठी उपयुक्त",
      category: "ओळख पत्र",
    },
    {
      image: "/assets/uploads/ayushman-bharat-card-online-apply-8.jpg",
      title: "आयुष्मान भारत कार्ड",
      englishTitle: "Ayushman Bharat Card",
      description: "५ लाख रुपयांपर्यंत मोफत उपचार - आयुष्मान भारत योजना कार्ड मिळवा",
      category: "ओळख पत्र",
    },
    // व्यवसाय परवाना (Business Licenses)
    {
      image: "/assets/uploads/food-license-5.webp",
      title: "FSSAI परवाना",
      englishTitle: "FSSAI License",
      description: "खाद्यपदार्थ व्यवसाय सुरू करण्यासाठी आवश्यक FSSAI परवाना मिळवा",
      category: "व्यवसाय परवाना",
    },
    {
      image: "/assets/uploads/food-license-5.webp",
      title: "दुकान अधिनियम / गुमास्ता",
      englishTitle: "Shop Act / Gumasta License",
      description: "दुकान आणि व्यवसाय कायदेशीररित्या सुरू करण्यासाठी गुमास्ता परवाना",
      category: "व्यवसाय परवाना",
    },
    // व्यवसाय नोंदणी (Business Registration)
    {
      image: "/assets/uploads/udyam-aadhar-19.webp",
      title: "उद्यम नोंदणी",
      englishTitle: "Udyam Registration",
      description: "लघु आणि मध्यम उद्योगांसाठी उद्यम आधार नोंदणी आणि सरकारी लाभ",
      category: "व्यवसाय नोंदणी",
    },
    {
      image: "/assets/uploads/gst-number-3.webp",
      title: "GST नोंदणी",
      englishTitle: "GST Registration",
      description: "व्यवसायासाठी GST नंबर मिळवा - नवीन नोंदणी आणि सुधारणा सेवा उपलब्ध",
      category: "व्यवसाय नोंदणी",
    },
    {
      image: "/assets/uploads/llp-private-limited-18.webp",
      title: "LLP / प्रायव्हेट लिमिटेड",
      englishTitle: "LLP / Private Limited Company",
      description: "कंपनी नोंदणी, LLP स्थापना आणि सर्व कायदेशीर औपचारिकता पूर्ण करा",
      category: "व्यवसाय नोंदणी",
    },
    {
      image: "/assets/uploads/trademark-registration-13.webp",
      title: "ट्रेडमार्क नोंदणी",
      englishTitle: "Trademark Registration",
      description: "तुमच्या ब्रँड नावाचे कायदेशीर संरक्षण - ट्रेडमार्क नोंदणी आणि नूतनीकरण",
      category: "व्यवसाय नोंदणी",
    },
    {
      image: "/assets/uploads/logo-registration-14.webp",
      title: "लोगो नोंदणी",
      englishTitle: "Logo Registration",
      description: "व्यावसायिक लोगोचे कॉपीराइट आणि कायदेशीर नोंदणी - तुमची ओळख सुरक्षित करा",
      category: "व्यवसाय नोंदणी",
    },
    // कर सेवा (Tax Services)
    {
      image: "/assets/uploads/itr-filling-16.webp",
      title: "ITR भरणे",
      englishTitle: "Income Tax Return Filing",
      description: "वैयक्तिक आणि व्यावसायिक ITR भरणे - सर्व प्रकारच्या फॉर्म्स उपलब्ध",
      category: "कर सेवा",
    },
    // कायदेशीर सेवा (Legal Services)
    {
      image: "/assets/uploads/gazette-15.webp",
      title: "राजपत्र / नावाचा बदल",
      englishTitle: "Gazette / Name Change",
      description: "कायदेशीर नाव बदल प्रक्रिया आणि महाराष्ट्र राजपत्रात प्रकाशन",
      category: "कायदेशीर सेवा",
    },
    {
      image: "/assets/uploads/affidavit-6.jpg",
      title: "प्रतिज्ञापत्र",
      englishTitle: "Affidavit",
      description: "सर्व प्रकारची शपथपत्रे तयार करणे - नाव, पत्ता, जन्मतारीख सुधारणा",
      category: "कायदेशीर सेवा",
    },
    {
      image: "/assets/uploads/affidavit-6.jpg",
      title: "भाडे करारनामा",
      englishTitle: "Rent Agreement",
      description: "११ महिने/३३ महिन्यांसाठी कायदेशीर भाडे करार तयार करणे आणि नोंदणी",
      category: "कायदेशीर सेवा",
    },
    {
      image: "/assets/uploads/affidavit-6.jpg",
      title: "नोटरी व स्टॅम्प पेपर",
      englishTitle: "Notary & Stamp Paper",
      description: "विश्वासू नोटरी सेवा आणि सर्व प्रकारच्या स्टॅम्प पेपरची व्यवस्था",
      category: "कायदेशीर सेवा",
    },
    // सत्यापन सेवा (Verification Services)
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "पोलीस सत्यापन",
      englishTitle: "Police Verification",
      description: "नोकरी, पासपोर्ट आणि भाडे करारासाठी आवश्यक पोलीस सत्यापन सेवा",
      category: "सत्यापन सेवा",
    },
    // इतर सेवा (Other Services)
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "मराठी व इंग्रजी टायपिंग",
      englishTitle: "Marathi & English Typing",
      description: "व्यावसायिक दस्तऐवज, अर्ज आणि पत्रे मराठी व इंग्रजीत टायपिंग",
      category: "इतर सेवा",
    },
    {
      image: "/assets/uploads/domicile-1.webp",
      title: "झेरॉक्स सेवा",
      englishTitle: "Xerox Services",
      description: "उच्च दर्जाची झेरॉक्स, रंगीत प्रिंट, स्कॅन आणि लॅमिनेशन सेवा",
      category: "इतर सेवा",
    },
  ];

  const categories = Array.from(new Set(services.map((s) => s.category)));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6">
              आमच्या सेवा
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
              आम्ही पुरवत असलेल्या सेवा
            </h1>
            <p className="text-xl text-muted-foreground">
              तुमच्या सर्व सरकारी कागदपत्रांसाठी एकच विश्वासू ठिकाण - जलद, सुरक्षित, प्रामाणिक
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">{category}</h2>
                <div className="h-1 w-20 rounded bg-primary"></div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.category === category)
                  .map((service, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden border-l-4 border-l-transparent transition-all hover:border-l-primary hover:shadow-lift"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <img
                          src={service.image}
                          alt={service.englishTitle}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {service.englishTitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">कसे काम करते?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              फक्त ४ साध्या पायऱ्यांमध्ये तुमचे कागदपत्र तयार मिळवा
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  १
                </div>
                <CardTitle>संपर्क करा</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  फोन, WhatsApp किंवा थेट भेट देऊन आमच्याशी बोला - आम्ही तुमची मदत करू
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  २
                </div>
                <CardTitle>कागदपत्रे द्या</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  आवश्यक कागदपत्रे आणा - काय लागेल ते आम्ही सांगू
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  ३
                </div>
                <CardTitle>प्रक्रिया</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  आम्ही तुमचे काम जलद आणि शासन नियमानुसार पूर्ण करतो
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  ४
                </div>
                <CardTitle>दस्तऐवज मिळवा</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  तयार दस्तऐवज तुमच्या हातात - वेळेवर आणि सुरक्षित
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            आपल्याला कोणत्या सेवेची गरज आहे?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            आज लगेच आमच्याशी संपर्क साधा - आम्ही तुमची मदत करण्यास तयार आहोत!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:8070404099"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              ८०७०४०४०९९ वर कॉल करा
            </a>
            <a
              href="https://wa.me/918070404099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              WhatsApp वर संदेश पाठवा
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
