import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/components/Dashboard/Dashboard';
import { ToastProvider } from 'react-native-toast-notifications';

export default function App() {
  return (
    <ToastProvider
      swipeEnabled={true}
      placement="bottom"
      duration={2500}
      animationType='slide-in'
    >
      <Dashboard />
    </ToastProvider>
  );
}


