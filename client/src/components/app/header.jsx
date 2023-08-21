import classNames from 'classnames';

const Header = () => {
    const headerClasses = classNames(
        'text-4xl',
        'font-light',
        'text-center',
        'h-24',
        'flex',
        'items-center',
        'justify-center',
        'mb-4',
    );

    return (
        <div className={headerClasses}>
            <h1 >
                [books]
            </h1>
        </div>
    );
}

export default Header;