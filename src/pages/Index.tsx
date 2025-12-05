import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Cpu, 
  Rocket, 
  Trophy, 
  Users, 
  Zap, 
  CircuitBoard,
  Target,
  Award,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronDown
} from "lucide-react";
import heroRobot from "@/assets/hero-robot-apple.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-soft-gray">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-apple-blue/5" />
        
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 z-10 py-32">
          <div className="max-w-7xl mx-auto">
            {/* Small label */}
            <div className="text-center mb-8 animate-slide-down">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/5">
                RSCOE Official Robocon Team
              </span>
            </div>
            
            {/* Hero Title */}
            <div className="text-center mb-12 space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight text-shadow-soft">
                Team CIPHER
              </h1>
              <p className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Engineering Future Dominance
              </p>
            </div>
            
            {/* Robot Image - Premium Presentation */}
            <div className="relative max-w-5xl mx-auto mb-16 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-premium">
                <img 
                  src={heroRobot} 
                  alt="Team CIPHER Premium Robot" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating minimal badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="apple-card px-6 py-3 backdrop-blur-xl bg-white/90">
                  <p className="text-xs text-muted-foreground mb-1">Innovation</p>
                  <p className="text-lg font-bold">Excellence</p>
                </div>
                <div className="apple-card px-6 py-3 backdrop-blur-xl bg-white/90">
                  <p className="text-xs text-muted-foreground mb-1">Precision</p>
                  <p className="text-lg font-bold">Engineering</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="default" size="xl">
                Explore Our Robots
              </Button>
              <Button variant="outline" size="xl">
                <Trophy className="w-5 h-5" />
                View Competitions
              </Button>
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean Split Layout */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">About Team CIPHER</p>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight accent-line pb-4">
                    Founded in 2018
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are the official Robocon team of JSPM's Rajarshi Shahu College of Engineering, 
                  dedicated to pushing the boundaries of robotics innovation and engineering excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our interdisciplinary team combines mechanical precision, electrical innovation, 
                  and software intelligence to create competition-winning robots.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {[
                  { icon: Rocket, title: "Innovation First", desc: "Pioneering robotics solutions" },
                  { icon: Target, title: "Precision Engineering", desc: "Excellence in design" },
                  { icon: Award, title: "Competition Winners", desc: "National champions" },
                  { icon: Users, title: "Team Excellence", desc: "Collaborative culture" }
                ].map((item, idx) => (
                  <Card key={idx} className="apple-card p-6 premium-shine" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section - Apple Product Storytelling */}
      <section className="py-32 bg-gradient-to-b from-soft-gray to-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-6 animate-slide-up">
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Innovation &<br />Technical Dominance
              </h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                Our philosophy is simple: Push boundaries, engineer perfection, dominate competitions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Cutting-Edge Technology</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every robot we build represents the pinnacle of modern robotics engineering, 
                    featuring advanced autonomous systems and precision control.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Advanced mechatronics systems",
                    "AI-powered autonomous navigation",
                    "Custom PCB design",
                    "High-torque precision actuators"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {/* Performance Metrics - Apple Style */}
                {[
                  { label: "Innovation Index", value: 98, color: "primary" },
                  { label: "Competition Success", value: 95, color: "apple-blue" },
                  { label: "Technical Precision", value: 99, color: "primary" }
                ].map((metric, idx) => (
                  <div key={idx} className="apple-card p-6">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-base font-semibold">{metric.label}</span>
                      <span className="text-4xl font-bold text-primary">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section - Premium Event Cards */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-slide-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Competition History</p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Proven Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Consistently competing and winning at the highest levels of robotics competition.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "ABU Robocon 2024", status: "ACTIVE", result: "National Finalist", year: "2024" },
                { name: "ABU Robocon 2023", status: "COMPLETED", result: "Regional Winner", year: "2023" },
                { name: "Techfest IIT Bombay", status: "COMPLETED", result: "2nd Place", year: "2023" },
                { name: "IPAS Challenge", status: "COMPLETED", result: "Winner", year: "2023" },
                { name: "ABU Robocon 2022", status: "COMPLETED", result: "Regional Finalist", year: "2022" },
                { name: "National Robotics Week", status: "COMPLETED", result: "Best Design", year: "2022" }
              ].map((comp, idx) => (
                <Card key={idx} className="apple-card p-8 premium-shine animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-bold text-muted-foreground/20">{comp.year}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      comp.status === 'ACTIVE' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {comp.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{comp.name}</h3>
                  <p className="text-muted-foreground mb-6">{comp.result}</p>
                  <Trophy className="w-8 h-8 text-primary/30" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Robots Showcase - Premium Product Display */}
      <section className="py-32 bg-gradient-to-b from-soft-gray to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-slide-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Robots</p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Engineering Marvels
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Precision-built robots designed for competition dominance.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {[
                { 
                  name: "CIPHER-Alpha", 
                  year: "2024", 
                  tagline: "Next-Gen Autonomous System",
                  specs: ["Autonomous Navigation", "45kg Payload Capacity", "AI Vision System", "Real-time Processing"]
                },
                { 
                  name: "CIPHER-Beta", 
                  year: "2023", 
                  tagline: "Precision Manipulation Expert",
                  specs: ["6-DOF Robotic Arm", "Precision Gripper", "Real-time Control", "Advanced Sensors"]
                }
              ].map((robot, idx) => (
                <div key={idx} className="apple-card overflow-hidden animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                  {/* Robot Display Area */}
                  <div className="aspect-video bg-gradient-to-br from-soft-gray to-white relative flex items-center justify-center p-12">
                    <Cpu className="w-32 h-32 text-primary/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  
                  {/* Robot Info */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-1">{robot.name}</h3>
                        <p className="text-muted-foreground">{robot.tagline}</p>
                      </div>
                      <span className="text-sm font-mono text-primary bg-primary/5 px-3 py-1 rounded-full">{robot.year}</span>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-border">
                      {robot.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section - Clean Minimal */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-slide-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Education & Outreach</p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Workshops & Initiatives
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Inspiring the next generation of robotics engineers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Robotics Bootcamp", desc: "Comprehensive hands-on training in robot design and programming" },
                { icon: CircuitBoard, title: "PCB Design Workshop", desc: "Learn embedded systems and circuit design from industry experts" },
                { icon: Cpu, title: "AI & ML for Robotics", desc: "Implement machine learning algorithms in robotic systems" }
              ].map((workshop, idx) => (
                <Card key={idx} className="apple-card p-8 premium-shine animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <workshop.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{workshop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{workshop.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Clean Portrait Grid */}
      <section className="py-32 bg-gradient-to-b from-soft-gray to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-slide-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Team</p>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Meet the Innovators
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Engineers, designers, and problem solvers working together.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <Card key={idx} className="apple-card p-6 group premium-shine animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-soft-gray to-muted mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-1">Team Member</h3>
                  <p className="text-xs text-muted-foreground">Engineering Division</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Simplicity */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-slide-up">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Ready to Collaborate?
              </h2>
              <p className="text-2xl text-muted-foreground">
                Join us in building the future of robotics.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" size="xl">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="xl">
                <Users className="w-5 h-5" />
                Join Team CIPHER
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Ultra-minimal Apple Style */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Team CIPHER</h3>
                <p className="text-background/70 mb-2">
                  JSPM's Rajarshi Shahu College of Engineering
                </p>
                <p className="text-background/70">Pune, Maharashtra</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-background/70">
                  <p className="hover:text-background transition-colors cursor-pointer">About Us</p>
                  <p className="hover:text-background transition-colors cursor-pointer">Our Robots</p>
                  <p className="hover:text-background transition-colors cursor-pointer">Competitions</p>
                  <p className="hover:text-background transition-colors cursor-pointer">Contact</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex gap-3">
                  {[Instagram, Linkedin, Github, Mail].map((Icon, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors cursor-pointer">
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-background/10 text-center text-background/60 text-sm">
              <p>© 2024 Team CIPHER. Engineering the future.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
