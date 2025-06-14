import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Users, BookOpen, Zap, Flame, Sparkles, TrendingUp, Award, Target, Rocket, Brain, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageContainer from '@/components/layout/PageContainer';

const Library = () => {
  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Flame className="h-4 w-4 text-red-500" />
                <span>Trending Courses</span>
              </CardTitle>
              <CardDescription>Our most popular courses right now.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Advanced JavaScript</span>
                  <Badge variant="secondary">Hot</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>React Masterclass</span>
                  <Badge variant="secondary">Hot</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span>Node.js for Beginners</span>
                  <Badge variant="secondary">Hot</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span>Newest Additions</span>
              </CardTitle>
              <CardDescription>Recently added courses to our library.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>GraphQL Explained</span>
                  <span className="text-sm text-muted-foreground">Just added</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Vue.js Fundamentals</span>
                  <span className="text-sm text-muted-foreground">Just added</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Cybersecurity Basics</span>
                  <span className="text-sm text-muted-foreground">Just added</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Highest Rated</span>
              </CardTitle>
              <CardDescription>Courses with the best reviews.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Python for Data Science</span>
                  <Star className="h-4 w-4 text-yellow-500" />
                </li>
                <li className="flex items-center justify-between">
                  <span>UI/UX Design Principles</span>
                  <Star className="h-4 w-4 text-yellow-500" />
                </li>
                <li className="flex items-center justify-between">
                  <span>Machine Learning A-Z</span>
                  <Star className="h-4 w-4 text-yellow-500" />
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span>Technology</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>Data Science</li>
                  <li>Artificial Intelligence</li>
                </ul>
                <Button variant="link" className="mt-2">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-purple-500" />
                  <span>Business</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Marketing</li>
                  <li>Finance</li>
                  <li>Management</li>
                  <li>Entrepreneurship</li>
                </ul>
                <Button variant="link" className="mt-2">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-orange-500" />
                  <span>Personal Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Communication Skills</li>
                  <li>Leadership</li>
                  <li>Time Management</li>
                  <li>Stress Management</li>
                </ul>
                <Button variant="link" className="mt-2">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-teal-500" />
                  <span>Design</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Web Design</li>
                  <li>Mobile Design</li>
                </ul>
                <Button variant="link" className="mt-2">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
};

export default Library;
