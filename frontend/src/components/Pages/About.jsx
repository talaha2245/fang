import React from 'react';
import Header from "../Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center py-10 px-2">
        <section className="w-full max-w-3xl bg-white/95 rounded-xl shadow-lg p-8 md:p-12 border border-gray-200">

          {/* Title Section */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center tracking-tight">
            About <span className="text-indigo-600">FAANG Predictor</span>
          </h1>

          {/* Introduction */}
          <p className="text-lg text-gray-700 mb-8 text-center">
            <span className="font-semibold text-indigo-700">FAANG Predictor</span> helps you estimate your chances of getting into top tech companies by analyzing your coding profile and other key factors.
          </p>

          {/* How It Works */}
          <div className="mb-10">
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                How It Works
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-indigo-700">LeetCode Profile:</span> Your problem-solving ability is evaluated using your LeetCode profile, contributing <span className="font-bold text-indigo-600">65%</span> to your overall score.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">ELO System:</span> An ELO-based rating system is used to assess your coding skills and consistency.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">Other Criteria:</span> We also consider:
                  <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
                    <li>Internship experience</li>
                    <li>Computer Science background</li>
                    <li>Development/project experience</li>
                  </ul>
                  These contribute <span className="font-bold text-indigo-600">35%</span> to your score.
                </li>
                <li>
                  <span className="font-semibold text-indigo-700">Ranking System:</span> Your ranking is determined based on:
                  <ul className="list-disc list-inside ml-6 mt-1 text-gray-600">
                    <li><span className="font-semibold text-indigo-700">LeetCode Score:</span> Reflects your problem-solving skills.</li>
                    <li><span className="font-semibold text-indigo-700">Development Score:</span> Based on your project and development experience.</li>
                    <li><span className="font-semibold text-indigo-700">Total Performance:</span> Combines all factors for your overall rank.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Use Section */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Why Use FAANG Predictor?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Get a realistic assessment of your FAANG readiness.</li>
              <li>Identify strengths and areas for improvement.</li>
              <li>Track your progress as you grow your skills.</li>
              <li>See your ranking based on coding and development performance.</li>
            </ul>
          </div>

          {/* Ranking Section */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-indigo-700 mb-2">Ranking Section</h2>
            <p className="text-gray-700 mb-3">
              Users are ranked based on their overall performance. The ranking is determined by three main aspects:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
              <li>
                <span className="font-semibold text-indigo-700">LeetCode Performance:</span> Based on your problem-solving skills and activity on LeetCode.
              </li>
              <li>
                <span className="font-semibold text-indigo-700">Development Performance:</span> Based on your project and development experience.
              </li>
              <li>
                <span className="font-semibold text-indigo-700">All Aspects Combined:</span> Overall ranking combining LeetCode, development, and other factors.
              </li>
            </ul>
          </div>

          {/* ELO Code Example */}
          <div className="bg-gray-900 rounded-lg p-6 mt-8 shadow-inner">
            <pre className="text-sm text-gray-100 overflow-x-auto">
{`// 5 point for easy problem 10 point for mid problm 20 pointd for hard proble
leetcode = min(1500,(5*easy+10*med+20*hard))
other based on check boxes

total = (1.3*leetcode+0.7*other)
}
`}
            </pre>
          </div>

          {/* Footer Note */}
          <p className="text-gray-500 text-xs text-center mt-8">
            Made with <span className="text-pink-400">♥</span> to help you reach your dream job.<br />
            <span className="font-bold text-gray-700 text-base">MADE BY : TALAHA</span>
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
