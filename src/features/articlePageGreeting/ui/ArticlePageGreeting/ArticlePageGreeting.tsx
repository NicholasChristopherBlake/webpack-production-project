import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePageGreeting.module.scss';
import { memo } from 'react';

interface ArticlePageGreetingProps {
    className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.ArticlePageGreeting, {}, [className])}>
           
        </div>
    );
});