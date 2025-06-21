/*
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
*/

// TEMP TEST VERSION:
function App() {
  return (
    <div>
      <h1>Hello Bayerenzo 🚗</h1>
      <p>If you see this, your setup works!</p>
    </div>
  );
}

export default App;
