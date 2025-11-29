import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Surface, useTheme } from 'react-native-paper';
import { useMoodStore } from '../store/moodStore';

const EMOTIONS = [
  { emoji: '😊', label: 'Feliz' },
  { emoji: '😔', label: 'Triste' },
  { emoji: '😰', label: 'Ansioso' },
  { emoji: '😤', label: 'Frustrado' },
  { emoji: '😌', label: 'Tranquilo' },
  { emoji: '😴', label: 'Cansado' },
];

const ENERGY_LEVELS = [1, 2, 3, 4, 5];

export default function CheckInScreen() {
  const theme = useTheme();
  const addCheckIn = useMoodStore((state) => state.addCheckIn);
  const [energy, setEnergy] = useState<number | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  const toggleEmotion = (emoji: string) => {
    if (selectedEmotions.includes(emoji)) {
      setSelectedEmotions(selectedEmotions.filter(e => e !== emoji));
    } else if (selectedEmotions.length < 3) {
      setSelectedEmotions([...selectedEmotions, emoji]);
    }
  };

  const handleSave = () => {
    if (energy && selectedEmotions.length > 0) {
      // Save to AsyncStorage via Zustand
      addCheckIn(energy, selectedEmotions);
      console.log('Check-in saved:', { energy, emotions: selectedEmotions, date: new Date() });
      alert('¡Check-in guardado! 💜');
      setEnergy(null);
      setSelectedEmotions([]);
    }
  };

  const canSave = energy !== null && selectedEmotions.length > 0;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          ¿Cómo te sientes hoy?
        </Text>

        {/* Energy Level Section */}
        <Surface style={styles.section} elevation={1}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Nivel de energía
          </Text>
          <View style={styles.energyContainer}>
            {ENERGY_LEVELS.map((level) => (
              <Button
                key={level}
                mode={energy === level ? 'contained' : 'outlined'}
                onPress={() => setEnergy(level)}
                style={styles.energyButton}
                contentStyle={styles.energyButtonContent}
              >
                {level}
              </Button>
            ))}
          </View>
          <View style={styles.energyLabels}>
            <Text variant="bodySmall" style={styles.energyLabel}>Bajo</Text>
            <Text variant="bodySmall" style={styles.energyLabel}>Alto</Text>
          </View>
        </Surface>

        {/* Emotions Section */}
        <Surface style={styles.section} elevation={1}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Emociones (máx. 3)
          </Text>
          <Text variant="bodySmall" style={styles.emotionHint}>
            Seleccionadas: {selectedEmotions.length}/3
          </Text>
          <View style={styles.emotionsGrid}>
            {EMOTIONS.map(({ emoji, label }) => (
              <Button
                key={emoji}
                mode={selectedEmotions.includes(emoji) ? 'contained' : 'outlined'}
                onPress={() => toggleEmotion(emoji)}
                style={styles.emotionButton}
                contentStyle={styles.emotionButtonContent}
                disabled={!selectedEmotions.includes(emoji) && selectedEmotions.length >= 3}
              >
                <Text style={styles.emoji}>{emoji}</Text>
                {'\n'}
                <Text style={styles.emotionLabel}>{label}</Text>
              </Button>
            ))}
          </View>
        </Surface>

        {/* Save Button */}
        <Button
          mode="contained"
          onPress={handleSave}
          disabled={!canSave}
          style={styles.saveButton}
          contentStyle={styles.saveButtonContent}
        >
          Guardar check-in
        </Button>

        <Text variant="bodySmall" style={styles.footer}>
          No hay respuestas correctas o incorrectas 💜
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  energyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  energyButton: {
    flex: 1,
    borderRadius: 8,
  },
  energyButtonContent: {
    height: 56,
  },
  energyLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 4,
  },
  energyLabel: {
    opacity: 0.6,
  },
  emotionHint: {
    marginBottom: 12,
    opacity: 0.7,
  },
  emotionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  emotionButton: {
    width: '31%',
    borderRadius: 12,
  },
  emotionButtonContent: {
    height: 96,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  emoji: {
    fontSize: 32,
    lineHeight: 36,
  },
  emotionLabel: {
    fontSize: 11,
    marginTop: 6,
  },
  saveButton: {
    marginTop: 8,
    borderRadius: 8,
  },
  saveButtonContent: {
    height: 56,
  },
  footer: {
    textAlign: 'center',
    marginTop: 16,
    opacity: 0.7,
  },
});
