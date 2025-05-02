import React, { useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  ButtonGroup,
  Paper,
} from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from '@mui/icons-material';
import { TextBlock as TextBlockType, BlockComponentProps } from './types';
import ContentEditable from 'react-contenteditable';
import { styled } from '@mui/material/styles';

interface TextBlockProps extends BlockComponentProps {
  block: TextBlockType;
}

const StyledContentEditable = styled(ContentEditable)(({ theme }) => ({
  '&:focus': {
    outline: 'none',
  },
  minHeight: '2em',
  padding: theme.spacing(1),
}));

const TextBlock: React.FC<TextBlockProps> = ({
  block,
  isEditing,
  isSelected,
  onChange,
  onFocus,
  onBlur,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSelected && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isSelected]);

  const handleChange = (evt: any) => {
    onChange({
      ...block,
      content: evt.target.value,
    });
  };

  const toggleFormat = (format: keyof Required<TextBlockType>['formatting']) => {
    onChange({
      ...block,
      formatting: {
        ...block.formatting,
        [format]: !block.formatting?.[format],
      },
    });
  };

  const setAlignment = (alignment: 'left' | 'center' | 'right') => {
    onChange({
      ...block,
      formatting: {
        ...block.formatting,
        alignment,
      },
    });
  };

  const getStyle = () => {
    const formatting = block.formatting || {};
    return {
      fontWeight: formatting.bold ? 'bold' : 'normal',
      fontStyle: formatting.italic ? 'italic' : 'normal',
      textDecoration: formatting.underline ? 'underline' : 'none',
      textAlign: formatting.alignment || 'left',
    };
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '&:hover .block-toolbar': {
          opacity: 1,
        },
      }}
    >
      <Paper
        elevation={isSelected ? 1 : 0}
        sx={{
          position: 'relative',
          border: (theme) => `1px solid ${isSelected ? theme.palette.primary.main : 'transparent'}`,
          borderRadius: 1,
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: (theme) => theme.palette.grey[300],
          },
        }}
      >
        {isSelected && (
          <Paper
            className="block-toolbar"
            sx={{
              position: 'absolute',
              top: -48,
              left: 0,
              zIndex: 1,
              opacity: isSelected ? 1 : 0,
              transition: 'opacity 0.2s',
            }}
            elevation={1}
          >
            <Stack direction="row" spacing={1} p={0.5}>
              <ButtonGroup size="small" variant="outlined">
                <Tooltip title="Bold">
                  <IconButton
                    size="small"
                    onClick={() => toggleFormat('bold')}
                    color={block.formatting?.bold ? 'primary' : 'default'}
                  >
                    <FormatBold />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Italic">
                  <IconButton
                    size="small"
                    onClick={() => toggleFormat('italic')}
                    color={block.formatting?.italic ? 'primary' : 'default'}
                  >
                    <FormatItalic />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Underline">
                  <IconButton
                    size="small"
                    onClick={() => toggleFormat('underline')}
                    color={block.formatting?.underline ? 'primary' : 'default'}
                  >
                    <FormatUnderlined />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>

              <ButtonGroup size="small" variant="outlined">
                <Tooltip title="Align Left">
                  <IconButton
                    size="small"
                    onClick={() => setAlignment('left')}
                    color={block.formatting?.alignment === 'left' ? 'primary' : 'default'}
                  >
                    <FormatAlignLeft />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Align Center">
                  <IconButton
                    size="small"
                    onClick={() => setAlignment('center')}
                    color={block.formatting?.alignment === 'center' ? 'primary' : 'default'}
                  >
                    <FormatAlignCenter />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Align Right">
                  <IconButton
                    size="small"
                    onClick={() => setAlignment('right')}
                    color={block.formatting?.alignment === 'right' ? 'primary' : 'default'}
                  >
                    <FormatAlignRight />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </Stack>
          </Paper>
        )}

        <Box p={2}>
          <StyledContentEditable
            innerRef={contentRef}
            html={block.content}
            disabled={!isEditing}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            style={getStyle()}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default TextBlock;
