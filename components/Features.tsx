import React from 'react';
import { GitMerge, Lock, Server, Scale, Users } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">System Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1: Specialized Agents */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-2xl border border-white/10 hover:border-protego-cyan/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Users size={24} />
              </div>
              <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded">MULTI-AGENT SYSTEM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Two Teams of Specialized Agents</h3>
            <p className="text-protego-muted">
              We construct distinct teams of Agents for each side of the lawsuit. These agents are autonomously connected to specialized tools, legal databases, and knowledge bases, allowing them to pitch against each other to expose every weakness.
            </p>
          </div>

          {/* Feature 2: MCP */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-protego-cyan/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Server size={24} />
              </div>
              <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded">PROTOCOL</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Model Context Protocol (MCP)</h3>
            <p className="text-protego-muted">
              Centralized server to host all tools, database connections, and system prompts for standardized agent communication.
            </p>
          </div>

           {/* Feature 3: Atomic Security */}
           <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-protego-cyan/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-red-500/10 rounded-lg text-red-400">
                <Lock size={24} />
              </div>
              <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded">SECURITY</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Atomic Level Security</h3>
            <p className="text-protego-muted">
              Authentication and Authorization are inbuilt into the atomic level of every agent and tool interaction, ensuring enterprise-grade data sovereignty.
            </p>
          </div>

           {/* Feature 4: Graph Workflows */}
           <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-protego-cyan/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                <GitMerge size={24} />
              </div>
              <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded">LOGIC</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Graph-Based Workflows</h3>
            <p className="text-protego-muted">
              Enables the iterative "Draft → Critique → Refine" cycle that forces the agent teams to iterate until the document is iron clad.
            </p>
          </div>

           {/* Feature 5: Judge Agents */}
           <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-protego-cyan/30 transition-all">
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400">
                <Scale size={24} />
              </div>
              <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded">SIMULATION</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Judge Agents</h3>
            <p className="text-protego-muted">
              A final layer of "Judge Agents" simulates judicial rulings to predict outcomes based on the strengthened arguments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;