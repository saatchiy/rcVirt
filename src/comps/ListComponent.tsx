import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';
import ItemComponent from './ItemComponent';

const styles: any = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 32,
    }
};

type State = {
};

type Props = {
    items: string[],
};

class ListComponent extends React.Component<Props & WithStyles<'root'>, State> {

    constructor(props: Props & WithStyles<'root'>) {
        super(props);
    }

    render() {
        const { items, classes } = this.props;

        return(
            <div className={classes.root}>
                <Typography variant="display1">This is the list</Typography>
                {items.map(item => {
                    return (<ItemComponent key={item} content={item} />);
                })}
            </div>
        );
    }
}

export default withStyles(styles)<Props>(ListComponent);