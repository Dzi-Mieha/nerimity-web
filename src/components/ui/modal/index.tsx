import styles from './styles.module.scss';
import { JSX, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
export default function Modal(props: {show: boolean, title: string, component: () => JSX.Element}) {
  return (
    <Show when={props.show}>
      <Portal>
        <div class={styles.background}>
          <div class={styles.container}>
            <div class={styles.topBar}>
              <div class={styles.title}>{props.title}</div>
            </div>
            <div class={styles.innerContainer}>{props.component()}</div>
          </div>
        </div>
      </Portal>
    </Show>
  )
}