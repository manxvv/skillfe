import React from 'react';
import { Phone, MessageCircle, Clock, Lock, Check } from 'lucide-react';

const MentorshipPlanCard = () => {
  return (
    <div className="max-w-xl rounded-lg shadow-lg bg-white w-full space-y-4">
      {/* Tabs */}
      <div defaultValue="plans" className="w-full">
        <div className="w-full grid grid-cols-2">
          {/* <div 
            value="plans"
            className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Mentorship plans
          </div>
          <
            div 
            value="sessions"
            className="text-gray-500"
          >
            Sessions
          </
          div> */}
        </div>
      </div>

      {/* Main Card */}
      <div className="p-6 space-y-6">
        {/* Price */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">$100</span>
            <span className="text-gray-600">/ month</span>
          </div>
          
          <p className="text-gray-700">
            It is for students & recent graduates. It provides a roadmap for a successful remote tech career.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>3 calls per month (45min/call)</span>
          </div>
          
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            <span>Unlimited Q&A via chat</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-500" />
            <div className="flex items-center gap-1">
              <span>Expect responses</span>
              <a href="#" className="underline">in 24 hours or less</a>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Apply now
        </button>

        {/* Lock in Price */}
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Lock className="w-4 h-4" />
          <span>Lock in this price now!</span>
        </div>
      </div>

      {/* Free Trial Card */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <div className="font-medium">7-day free trial</div>
            <div className="text-gray-600">Cancel anytime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPlanCard;