import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { useSubmitForm } from "@/hooks/useQueries";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const submitFormMutation = useSubmitForm();

  const services = [
    "उत्पन्न प्रमाणपत्र",
    "अधिवास प्रमाणपत्र",
    "रहिवासी दाखला",
    "जातीचा दाखला",
    "नॉन-क्रीमीलेयर प्रमाणपत्र",
    "पॅन कार्ड",
    "FSSAI परवाना",
    "दुकान अधिनियम / गुमास्ता",
    "उद्यम नोंदणी",
    "पोलीस सत्यापन",
    "राजपत्र / नावाचा बदल",
    "भाडे करारनामा",
    "नोटरी व स्टॅम्प पेपर",
    "मराठी व इंग्रजी टायपिंग",
    "झेरॉक्स सेवा",
    "इतर",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("कृपया आपले नाव टाका");
      return;
    }

    if (!formData.mobileNumber.trim() || !/^[6-9]\d{9}$/.test(formData.mobileNumber.trim())) {
      toast.error("कृपया वैध मोबाइल नंबर टाका");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      toast.error("कृपया वैध ईमेल पत्ता टाका");
      return;
    }

    if (!formData.serviceType) {
      toast.error("कृपया सेवा प्रकार निवडा");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("कृपया संदेश टाका");
      return;
    }

    try {
      const result = await submitFormMutation.mutateAsync(formData);
      toast.success("आपला संदेश यशस्वीरित्या पाठवला गेला!");
      console.log("Form submission result:", result);

      // Reset form
      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-6">
              संपर्क
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">
              आमच्याशी संपर्क साधा
            </h1>
            <p className="text-xl text-muted-foreground">
              तुमच्या मदतीसाठी आम्ही नेहमी तयार आहोत. कोणताही प्रश्न असेल तर विचारा!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl">संपर्क माहिती</h2>
              </div>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">फोन</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:8070404099" className="text-primary hover:underline">
                    8070404099
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">सोमवार-शनिवार, ९:०० सकाळी - ७:०० संध्याकाळी</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">ईमेल</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:ssvashi02@gmail.com" className="text-primary hover:underline">
                    ssvashi02@gmail.com
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">२४ तासांत उत्तर मिळेल</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">पत्ता</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Shop No 238, SS4, Sector-2</p>
                  <p className="text-sm">Xerox Line, Vashi</p>
                  <p className="text-sm">Navi Mumbai - 400703</p>
                  <p className="mt-2 text-xs text-muted-foreground">वाशी स्टेशन जवळ</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">कार्य वेळ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium">सोमवार - शनिवार</p>
                  <p className="text-sm text-muted-foreground">९:०० सकाळी - ७:०० संध्याकाळी</p>
                  <p className="mt-2 text-sm font-medium">रविवार: बंद</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">संदेश पाठवा</CardTitle>
                  <CardDescription>
                    खालील फॉर्म भरा आणि आम्ही लगेच तुमच्याशी संपर्क साधू
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        नाव <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="आपले पूर्ण नाव टाका"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={submitFormMutation.isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">
                        मोबाइल नंबर <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="10 अंकी मोबाइल नंबर"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, "") })
                        }
                        maxLength={10}
                        disabled={submitFormMutation.isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        ईमेल <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={submitFormMutation.isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">
                        सेवा प्रकार <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                        disabled={submitFormMutation.isPending}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="सेवा निवडा" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        संदेश <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="आपला संदेश किंवा प्रश्न येथे लिहा..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={submitFormMutation.isPending}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={submitFormMutation.isPending}
                    >
                      {submitFormMutation.isPending ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          पाठवत आहे...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-5 w-5" />
                          संदेश पाठवा
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">आमचे स्थान</h2>
            <p className="text-muted-foreground">वाशी रेल्वे स्टेशनच्या अगदी जवळ - येणे सोपे!</p>
          </div>
          <div className="overflow-hidden rounded-lg border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.9980000!3d19.0760000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTknNTIuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S S ENTERPRISES Location - Vashi, Navi Mumbai"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
