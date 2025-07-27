// 全局类型定义

export interface Question {
  id: string;
  text: string;
  timestamp: Date;
}

export interface AnswerResult {
  question: Question;
  answer: Answer;
  timestamp: Date;
}

export interface Answer {
  id: number;
  text: string;
  category: 'positive' | 'negative' | 'neutral' | 'mysterious';
  wisdom: string;
}

export interface AppState {
  currentQuestion: string;
  currentAnswer: Answer | null;
  isRevealing: boolean;
  history: AnswerResult[];
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

// 组件Props类型
export interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export interface AnswerDisplayProps {
  answer: Answer | null;
  isVisible: boolean;
  onReset?: () => void;
}

export interface AnswerBookProps {
  className?: string;
}
