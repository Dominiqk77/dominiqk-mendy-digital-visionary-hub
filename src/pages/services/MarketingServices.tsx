
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  BarChart,
  SearchCheck,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Settings,
  Globe,
  PieChart,
  Megaphone,
  Lightbulb,
  LayoutGrid,
  Badge as BadgeIcon
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Chart } from '@/components/ui/chart';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const MarketingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-violet-950 to-indigo-950">
      <Navbar />
      
      {/* Colorful background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient circles */}
        <div className="absolute top-20 left-5 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center justify-center mb-6">
                <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 py-1.5 px-4">
                  Services Marketing
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Marketing Digital
                </h1>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6"></div>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Des stratégies marketing innovantes pour propulser votre entreprise et conquérir de nouveaux marchés en Afrique et à l'international.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-800/30" asChild>
                  <Link to="/contact">
                    Discuter de votre projet
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-indigo-400/60 text-indigo-100 hover:bg-indigo-800/20 shadow-lg shadow-indigo-900/20" asChild>
                  <Link to="/services">
                    Explorer d'autres services
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Success Metrics */}
            <div className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    metric: "+120%",
                    description: "Augmentation moyenne du trafic web pour nos clients",
                    icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
                    gradientFrom: "from-blue-500",
                    gradientTo: "to-cyan-500"
                  },
                  {
                    metric: "3.5x",
                    description: "Retour sur investissement moyen de nos campagnes",
                    icon: <BarChart className="w-12 h-12 text-purple-400" />,
                    gradientFrom: "from-indigo-500",
                    gradientTo: "to-purple-500"
                  },
                  {
                    metric: "+60%",
                    description: "Amélioration du taux de conversion moyen",
                    icon: <PieChart className="w-12 h-12 text-fuchsia-400" />,
                    gradientFrom: "from-purple-500",
                    gradientTo: "to-pink-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl shadow-indigo-900/20"
                  >
                    <div className="p-8 text-center">
                      <div className={`flex justify-center mb-4 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-opacity-20 items-center`}>
                        {item.icon}
                      </div>
                      <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">{item.metric}</h3>
                      <p className="text-indigo-100">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 relative">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30 py-1.5 px-4">
                Notre offre
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Solutions Marketing Complètes</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6"></div>
              <p className="text-xl text-indigo-100 mb-8">
                Des stratégies sur mesure pour atteindre vos objectifs commerciaux et établir une présence digitale forte.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "SEO & Contenu",
                  description: "Optimisation pour les moteurs de recherche et création de contenu engageant pour attirer un trafic qualifié.",
                  features: ["Audit SEO complet", "Optimisation on-page et off-page", "Contenu optimisé pour la conversion", "Stratégie de mots-clés ciblés"],
                  gradientFrom: "from-blue-500",
                  gradientTo: "to-cyan-600"
                },
                {
                  icon: <Megaphone className="h-10 w-10" />,
                  title: "Publicité Digitale",
                  description: "Campagnes publicitaires performantes sur les plateformes stratégiques pour maximiser votre retour sur investissement.",
                  features: ["Google Ads & Facebook Ads", "Remarketing intelligent", "Publicité native", "Campagnes display optimisées"],
                  gradientFrom: "from-indigo-500",
                  gradientTo: "to-purple-600"
                },
                {
                  icon: <Instagram className="h-10 w-10" />,
                  title: "Social Media",
                  description: "Gestion professionnelle de vos réseaux sociaux pour construire une communauté engagée et fidèle à votre marque.",
                  features: ["Création de contenus engageants", "Community management", "Marketing d'influence", "Stratégie éditoriale"],
                  gradientFrom: "from-purple-500",
                  gradientTo: "to-pink-600"
                },
                {
                  icon: <Mail className="h-10 w-10" />,
                  title: "Email Marketing",
                  description: "Stratégies d'email marketing personnalisées pour convertir vos prospects en clients fidèles.",
                  features: ["Séquences d'emails automatisées", "Segmentation avancée", "A/B testing", "Analyse et optimisation"],
                  gradientFrom: "from-cyan-500",
                  gradientTo: "to-blue-600"
                },
                {
                  icon: <SearchCheck className="h-10 w-10" />,
                  title: "Analyse & Reporting",
                  description: "Suivi précis de vos performances marketing avec des rapports détaillés et des insights actionnables.",
                  features: ["Tableaux de bord personnalisés", "KPIs pertinents", "Rapports mensuels détaillés", "Recommandations stratégiques"],
                  gradientFrom: "from-pink-500",
                  gradientTo: "to-purple-600"
                },
                {
                  icon: <Settings className="h-10 w-10" />,
                  title: "Mesure & Ajustement",
                  description: "Optimisation continue de vos campagnes marketing pour maximiser vos résultats et votre ROI.",
                  features: ["Suivi de conversion", "Optimisation du funnel", "Test A/B", "Amélioration continue"],
                  gradientFrom: "from-blue-500",
                  gradientTo: "to-indigo-600"
                }
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl overflow-hidden">
                    <div className={`h-2 w-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo}`}></div>
                    <CardHeader>
                      <div className={`rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} bg-opacity-20 text-white mb-4`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-indigo-100 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className={`text-gradient-from-${service.gradientFrom} mt-1`}>
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-sm text-indigo-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full justify-between text-indigo-100 hover:bg-white/10 hover:text-white" asChild>
                        <Link to="/contact">
                          <span>En savoir plus</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated Marketing Channels */}
        <section className="py-20 relative">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 py-1.5 px-4">
                Stratégie Omnicanale
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">Canaux Marketing Intégrés</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 mx-auto mb-6"></div>
              <p className="text-xl text-indigo-100">
                Une approche omnicanale pour une présence digitale cohérente et performante.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <Globe />,
                  title: "SEO",
                  description: "Optimisation pour les moteurs de recherche pour accroître votre visibilité organique.",
                  color: "bg-gradient-to-br from-blue-500 to-cyan-500"
                },
                {
                  icon: <Facebook />,
                  title: "Facebook & Instagram",
                  description: "Stratégies de contenu et publicités ciblées sur les réseaux sociaux populaires.",
                  color: "bg-gradient-to-br from-indigo-500 to-purple-500"
                },
                {
                  icon: <Youtube />,
                  title: "YouTube & TikTok",
                  description: "Contenu vidéo engageant pour capter l'attention et construire votre autorité.",
                  color: "bg-gradient-to-br from-red-500 to-pink-500"
                },
                {
                  icon: <Mail />,
                  title: "Email Marketing",
                  description: "Séquences d'emails personnalisées pour nourrir et convertir vos prospects.",
                  color: "bg-gradient-to-br from-cyan-500 to-blue-500"
                },
                {
                  icon: <Lightbulb />,
                  title: "Content Marketing",
                  description: "Création de contenu de valeur pour attirer et fidéliser votre audience.",
                  color: "bg-gradient-to-br from-amber-500 to-orange-500"
                },
                {
                  icon: <BadgeIcon />,
                  title: "Marketing d'Influence",
                  description: "Partenariats stratégiques avec des influenceurs pertinents pour votre marque.",
                  color: "bg-gradient-to-br from-pink-500 to-rose-500"
                },
                {
                  icon: <BarChart />,
                  title: "Publicité Display",
                  description: "Bannières publicitaires ciblées sur les sites web pertinents pour votre audience.",
                  color: "bg-gradient-to-br from-violet-500 to-purple-500"
                },
                {
                  icon: <LayoutGrid />,
                  title: "Marketing Mobile",
                  description: "Solutions marketing optimisées pour les utilisateurs mobiles, essentiels pour le marché africain.",
                  color: "bg-gradient-to-br from-green-500 to-emerald-500"
                }
              ].map((channel, idx) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg overflow-hidden">
                    <CardHeader className="text-center pb-2">
                      <div className={`rounded-full p-3 w-14 h-14 flex items-center justify-center ${channel.color} mx-auto mb-3 text-white`}>
                        {channel.icon}
                      </div>
                      <CardTitle className="text-lg text-white">{channel.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-indigo-100 text-center">{channel.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 relative">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30 py-1.5 px-4">
                Résultats & Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Études de Cas</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mx-auto mb-6"></div>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Découvrez comment nous avons aidé ces entreprises à atteindre leurs objectifs marketing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                {
                  client: "Marketplace Panafricaine",
                  results: [
                    "+150% de trafic organique",
                    "+85% d'inscriptions vendeurs",
                    "3.2x ROI sur les campagnes Meta"
                  ],
                  description: "Stratégie marketing 360° pour le lancement d'une marketplace B2C en Afrique de l'Ouest.",
                  gradient: "from-blue-600 to-indigo-800"
                },
                {
                  client: "Fintech Franco-Sénégalaise",
                  results: [
                    "+210% téléchargements app",
                    "-40% coût d'acquisition",
                    "+75% rétention utilisateurs"
                  ],
                  description: "Campagnes d'acquisition et de fidélisation pour une application de transfert d'argent.",
                  gradient: "from-purple-600 to-fuchsia-800"
                },
                {
                  client: "Cabinet de Conseil International",
                  results: [
                    "+95% leads qualifiés",
                    "25 nouveaux clients B2B",
                    "+120% visibilité sectorielle"
                  ],
                  description: "Stratégie d'inbound marketing et de thought leadership pour un cabinet de conseil.",
                  gradient: "from-emerald-600 to-cyan-800"
                }
              ].map((study, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-xl">
                    <div className={`bg-gradient-to-br ${study.gradient} p-8 h-full flex flex-col`}>
                      <div className="mb-6">
                        <Badge variant="outline" className="border-white/30 text-white mb-3">
                          Success Story
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-6">{study.client}</h3>
                        <p className="text-indigo-100 mb-6">{study.description}</p>
                      </div>
                      <div className="mt-auto">
                        <div className="text-sm text-indigo-200 mb-2">Résultats</div>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="text-cyan-300 w-4 h-4 shrink-0" />
                              <span className="text-white">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Performance Metrics */}
        <section className="py-20 relative">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 py-1.5 px-4">
                Données & Analytics
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-300 bg-clip-text text-transparent">Analyse de Performance</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 mx-auto mb-6"></div>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
                Nous utilisons des données concrètes pour mesurer et optimiser continuellement l'efficacité de nos stratégies.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="acquisition" className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6">
                <TabsList className="grid grid-cols-3 bg-indigo-900/50 border border-white/10">
                  <TabsTrigger value="acquisition" className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white text-indigo-200">Acquisition</TabsTrigger>
                  <TabsTrigger value="conversion" className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white text-indigo-200">Conversion</TabsTrigger>
                  <TabsTrigger value="retention" className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white text-indigo-200">Rétention</TabsTrigger>
                </TabsList>
                <TabsContent value="acquisition" className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-64 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                      <h4 className="text-lg font-medium mb-2 text-white">Croissance du Trafic</h4>
                      <p className="text-sm text-indigo-100 mb-4">Augmentation moyenne du trafic web pour nos clients</p>
                      <div className="flex-grow">
                        <Chart
                          type="line"
                          series={[
                            { name: 'Trafic Organique', data: [10, 25, 30, 40, 55, 70, 90, 110, 120, 130] },
                            { name: 'Trafic Payant', data: [5, 15, 25, 35, 40, 50, 65, 75, 85, 100] }
                          ]}
                          options={{
                            chart: { toolbar: { show: false }, zoom: { enabled: false } },
                            stroke: { curve: 'smooth', width: 2 },
                            colors: ['#818cf8', '#c084fc'],
                            xaxis: { 
                              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct'],
                              labels: { style: { colors: '#94a3b8' } }
                            },
                            yaxis: { labels: { style: { colors: '#94a3b8' } } },
                            grid: { borderColor: 'rgba(255,255,255,0.1)' },
                            legend: { labels: { colors: '#f8fafc' } },
                            tooltip: { theme: 'dark' },
                            theme: { mode: 'dark' }
                          }}
                        />
                      </div>
                    </div>
                    <div className="h-64 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                      <h4 className="text-lg font-medium mb-2 text-white">Sources de Trafic</h4>
                      <p className="text-sm text-indigo-100 mb-4">Répartition des sources de trafic des campagnes</p>
                      <div className="flex-grow">
                        <Chart
                          type="donut"
                          series={[40, 25, 15, 10, 10]}
                          options={{
                            chart: { toolbar: { show: false } },
                            colors: ['#818cf8', '#c084fc', '#22d3ee', '#34d399', '#fb923c'],
                            labels: ['Recherche', 'Social Media', 'Email', 'Referral', 'Direct'],
                            legend: { position: 'bottom', labels: { colors: '#f8fafc' } },
                            dataLabels: { enabled: false },
                            tooltip: { theme: 'dark' },
                            theme: { mode: 'dark' }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="conversion" className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-64 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                      <h4 className="text-lg font-medium mb-2 text-white">Taux de Conversion</h4>
                      <p className="text-sm text-indigo-100 mb-4">Évolution du taux de conversion sur 12 mois</p>
                      <div className="flex-grow">
                        <Chart
                          type="line"
                          series={[
                            { name: 'Taux de conversion', data: [1.2, 1.5, 1.8, 2.3, 2.6, 3.0, 3.5, 4.1, 4.5, 5.0, 5.5, 6.0] }
                          ]}
                          options={{
                            chart: { toolbar: { show: false }, zoom: { enabled: false } },
                            stroke: { curve: 'smooth', width: 3 },
                            colors: ['#c084fc'],
                            xaxis: { 
                              categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                              labels: { style: { colors: '#94a3b8' } }
                            },
                            yaxis: { labels: { style: { colors: '#94a3b8' } } },
                            grid: { borderColor: 'rgba(255,255,255,0.1)' },
                            legend: { labels: { colors: '#f8fafc' } },
                            tooltip: { theme: 'dark' },
                            theme: { mode: 'dark' }
                          }}
                        />
                      </div>
                    </div>
                    <div className="h-64 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                      <h4 className="text-lg font-medium mb-2 text-white">Canaux de Conversion</h4>
                      <p className="text-sm text-indigo-100 mb-4">Répartition des conversions par canal</p>
                      <div className="flex-grow">
                        <Chart
                          type="bar"
                          series={[
                            { name: 'Conversions', data: [42, 38, 27, 22, 18] }
                          ]}
                          options={{
                            chart: { toolbar: { show: false } },
                            colors: ['#818cf8'],
                            xaxis: { 
                              categories: ['SEO', 'Google Ads', 'Facebook/IG', 'Email', 'Autres'],
                              labels: { style: { colors: '#94a3b8' } }
                            },
                            yaxis: { labels: { style: { colors: '#94a3b8' } } },
                            grid: { borderColor: 'rgba(255,255,255,0.1)' },
                            plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
                            dataLabels: { enabled: false },
                            tooltip: { theme: 'dark' },
                            theme: { mode: 'dark' }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="retention" className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-64 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                      <h4 className="text-lg font-medium mb-2 text-white">Fidélisation Client</h4>
                      <p className="text-sm text-indigo-100 mb-4">Taux de rétention sur 12 mois</p>
                      <div className="flex-grow">
                        <Chart
                          type="area"
                          series={[
                            { name: 'Taux de rétention', data: [65, 68, 70, 72, 75, 78, 80, 82, 84, 85, 87, 89] }
                          ]}
                          options={{
                            chart: { toolbar: { show: false }, zoom: { enabled: false } },
                            stroke: { curve: 'smooth', width: 2 },
                            colors: ['#34d399'],
                            fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.1 } },
                            xaxis: { 
                              categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                              labels: { style: { colors: '#94a3b8' } }
                            },
                            yaxis: { labels: { style: { colors: '#94a3b8' } } },
                            grid: { borderColor: 'rgba(255,255,255,0.1)' },
                            tooltip: { theme: 'dark' },
                            theme: { mode: 'dark' }
                          }}
                        />
                      </div>
                    </div>
                    <div className="h-64 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
                      <h4 className="text-lg font-medium mb-2 text-white">Valeur Vie Client (LTV)</h4>
                      <p className="text-sm text-indigo-100 mb-4">Évolution de la valeur vie client</p>
                      <div className="flex-grow">
                        <Chart
                          type="line"
                          series={[
                            { name: 'LTV (€)', data: [120, 150, 180, 220, 250, 280, 320, 350, 390, 430, 460, 500] }
                          ]}
                          options={{
                            chart: { toolbar: { show: false }, zoom: { enabled: false } },
                            stroke: { curve: 'smooth', width: 3 },
                            colors: ['#fb923c'],
                            xaxis: { 
                              categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                              labels: { style: { colors: '#94a3b8' } }
                            },
                            yaxis: { labels: { style: { colors: '#94a3b8' } } },
                            grid: { borderColor: 'rgba(255,255,255,0.1)' },
                            tooltip: { theme: 'dark' },
                            theme: { mode: 'dark' }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-indigo-600/30 to-purple-600/30"></div>
                
                <div className="p-12 md:p-16 relative z-10">
                  {/* Floating elements */}
                  <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-cyan-500/40 blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-purple-500/40 blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30 py-1.5 px-4">
                      Commencez dès maintenant
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                      Prêt à Transformer Votre Présence Digitale ?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
                      Réservez une consultation gratuite de 30 minutes pour discuter de vos objectifs marketing et découvrir comment nous pouvons vous aider à les atteindre.
                    </p>
                    
                    <div className="p-6 md:p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg shadow-indigo-900/20 max-w-3xl mx-auto mb-8">
                      <div className="flex items-center justify-center mb-4">
                        <Badge variant="outline" className="bg-indigo-500/20 text-indigo-200 border-indigo-400/30">
                          OFFRE SPÉCIALE
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Consultation Stratégique Gratuite</h3>
                      <p className="text-indigo-100 mb-6">
                        Analyse de votre présence digitale actuelle, identification des opportunités d'amélioration et recommandations stratégiques personnalisées.
                      </p>
                      <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-900/30" asChild>
                        <Link to="/contact">
                          Réserver ma consultation
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10 text-white shadow-lg shadow-indigo-900/10" asChild>
                        <Link to="/services">
                          Explorer d'autres services
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingServices;
