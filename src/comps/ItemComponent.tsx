import * as React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Tooltip } from 'material-ui';
import { Typography } from 'material-ui';

type State = {

};

type Props = {
    content: string,
};

class ItemComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Tooltip title="Hello">
                        <Typography variant="headline" style={{paddingRight: 24}}>Hello</Typography>
                    </Tooltip>
                    <Tooltip title={this.props.content}>
                        <Typography variant="headline">{this.props.content}</Typography>
                    </Tooltip>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Tooltip title={this.props.content}>
                        <Typography variant="display2">{'hello ' + this.props.content}</Typography>
                    </Tooltip>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default ItemComponent;