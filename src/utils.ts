import { Notice } from 'obsidian';
import { exec } from 'child_process';
import { t } from './lang/inxdex';

/**
 * 打开文件或文件夹的操作系统命令。
 * @param i18n - 国际化对象，用于显示操作结果的通知。
 * @param dir - 要打开的文件夹路径。
 * @description 根据操作系统执行相应的命令来打开文件夹。在Windows上使用'start'命令，在Mac上使用'open'命令。
 * 如果操作成功，显示成功通知；如果失败，显示错误通知。
 */
export const managerOpen = (dir: string) => {
	if (navigator.userAgent.match(/Win/i)) {
		exec(`start "" "${dir}"`, (error) => {
			if (error) { new Notice(t('通用_失败_文本')); } else { new Notice(t('通用_成功_文本')); }
		});
	}
	if (navigator.userAgent.match(/Mac/i)) {
		exec(`open ${dir}`, (error) => {
			if (error) { new Notice(t('通用_失败_文本')); } else { new Notice(t('通用_成功_文本')); }
		});
	}
}
