import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Mon", value: 1200 },
  { name: "Tue", value: 1500 },
  { name: "Wed", value: 1400 },
  { name: "Thu", value: 1700 },
  { name: "Fri", value: 1600 },
  { name: "Sat", value: 1800 },
  { name: "Sun", value: 2000 },
];

export default function StatusEAMarket() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-slate-900 text-white p-6">
      <motion.h1 
        className="text-4xl font-bold text-center mb-10 text-blue-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        STATUS EA - Mercado de Valores
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 shadow-2xl rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-4 text-blue-200">Actividad Reciente</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
              <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} dot={{ fill: '#38bdf8' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800 shadow-2xl rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-4 text-blue-200">Panel de Información</h2>
          <ul className="space-y-2">
            <li>📈 Transacciones en tiempo real activas</li>
            <li>💸 Ingreso promedio semanal: $1,600</li>
            <li>🔍 Tendencia actual: Ascendente</li>
            <li>🌐 Participantes conectados: 73</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
