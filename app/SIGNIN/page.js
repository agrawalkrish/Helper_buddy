"use client";
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [showOTP, setShowOTP] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    referralCode: '',
    password: '',
  });

  const [signinData, setSigninData] = useState({
    identifier: '',
    password: '',
  });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in data:', signinData);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      setMessage('OTP verified successfully!');
    } else {
      setMessage('Incorrect OTP. Please try again.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="text-gray-600 mt-2">Please sign in to your account or create a new one</p>
        </div>
        
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
          <CardContent className="pt-6">
            {!showOTP && !showForgotPassword ? (
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-lg">
                  <TabsTrigger 
                    value="signup" 
                    className="rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-md"
                  >
                    Sign Up
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signin"
                    className="rounded-md transition-all data-[state=active]:bg-white data-[state=active]:shadow-md"
                  >
                    Sign In
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signup">
                  <form onSubmit={handleSignupSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-700">Gender</Label>
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) => setFormData({...formData, gender: value})}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male" className="text-gray-600">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female" className="text-gray-600">Female</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referralCode" className="text-gray-700">Referral Code (Optional)</Label>
                      <Input
                        id="referralCode"
                        type="text"
                        value={formData.referralCode}
                        onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
                        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700">Create Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                    >
                      Sign Up
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signin">
                  <form onSubmit={handleSigninSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="identifier" className="text-gray-700">Email or Phone Number</Label>
                      <Input
                        id="identifier"
                        type="text"
                        value={signinData.identifier}
                        onChange={(e) => setSigninData({...signinData, identifier: e.target.value})}
                        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signinPassword" className="text-gray-700">Password</Label>
                      <Input
                        id="signinPassword"
                        type="password"
                        value={signinData.password}
                        onChange={(e) => setSigninData({...signinData, password: e.target.value})}
                        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <Button
                      type="button"
                      variant="link"
                      onClick={handleForgotPassword}
                      className="p-0 h-auto font-normal text-blue-600 hover:text-blue-700"
                    >
                      Forgot Password?
                    </Button>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                    >
                      Sign In
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            ) : showOTP ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-900">Enter OTP</h2>
                <p className="text-center text-gray-600">
                  Please enter the OTP sent to your email
                </p>
                <form onSubmit={handleOTPSubmit} className="space-y-6">
                  <Input
                    type="text"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength={6}
                    className="text-center text-2xl tracking-wider rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Verify OTP
                  </Button>
                </form>
                {message && (
                  <Alert className={message.includes('successfully') ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}>
                    <AlertDescription className={message.includes('successfully') ? 'text-green-800' : 'text-red-800'}>
                      {message}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-900">Forgot Password</h2>
                <p className="text-center text-gray-600">
                  Enter your email to receive an OTP
                </p>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setShowOTP(true);
                }} className="space-y-6">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-lg border-gray-200 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Send OTP
                  </Button>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;