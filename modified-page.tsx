// This is a temporary file showing what the edit should look like
// The "Step 7 - Center" section has been removed

                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Access to a dashboard</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>Regular updates from your Relationship Manager</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Step 7 - Right Side */}
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  
                  {/* Center dot - visible only on medium and larger screens */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900">
                      <span className="font-bold text-white text-lg">7</span>
                    </div>
                  </div>
                  
                  {/* Mobile dot - visible only on small screens */}
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-navy-900 z-20 md:hidden mb-6">
                    <span className="font-bold text-white text-lg">7</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 shadow-lg border border-blue-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 animate-slide-in-right" style={{ animationDelay: "0.9s" }}>
                      <h4 className="text-xl font-bold text-white flex gap-3 items-center mb-3">
                        <span className="text-3xl animate-bounce-subtle">🔄</span>
                        Stay Engaged
                      </h4>
                      <ul className="text-slate-300 space-y-2">
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>You can review, interact, and make informed decisions anytime.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>The PMS team makes changes based on market trends and your evolving goals.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
