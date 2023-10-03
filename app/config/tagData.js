import { useTranslation } from 'react-i18next';

export const getTags = () => {
  const { t } = useTranslation();
  return [
    { label: t('Morning'), color: '#FEE197', icon: 'weather-sunset-up' },     
    { label: t('Day'), color: '#87CEEB', icon: 'weather-sunny' },              
    { label: t('Evening'), color: '#FFA07A', icon: 'weather-sunset-down' },    
    { label: t('Exercise'), color: '#98FB98', icon: 'weight-lifter' },        
    { label: t('Diet'), color: '#FFB6C1', icon: 'food-variant' },              
    { label: t('Work'), color: '#FFDAB9', icon: 'briefcase-outline' },           
    { label: t('Other'), color: '#FFB0E5', icon: 'dots-hexagon' } 
    // Lägg till fler taggar här om det behövs
  ];
};

